import * as React from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
// import clsx from 'clsx';
import { getInnerHeight } from './utils/domFns';
import bindRaf from './utils/bindRaf';
import './DragTool.css';

function DragStuff(props) {
  const dragBasic = React.useRef<HTMLDivElement>(null);
  const drag = React.useRef({ state: { x: 0 } });
  const [isDragging, setDrag] = React.useState(false);

  React.useEffect(() => {
    if (!isDragging && dragBasic.current !== null)
      dragBasic.current.style.transform = '';
  }, [isDragging]);

  const dragStuffRef = React.useRef<{
    node: HTMLDivElement | null;
    appended: boolean;
  }>({
    node: null,
    appended: false,
  });

  const handleDragStart: DraggableEventHandler = (_, ui) => {
    setDrag(true);
    const wrapper = document.getElementsByClassName('table-wrapper')[0];
    const height = getInnerHeight(wrapper);

    const dragInfo = dragStuffRef.current;
    const { left, top } = ui.node.getBoundingClientRect();
    const el = dragInfo.node || (dragInfo.node = document.createElement('div'));
    el.style.left = `${left}px`;

    if (!dragInfo.appended) {
      el.className = 'stuff-dragging';
      el.style.height = `${height}px`;
      el.style.top = `${top}px`;
      dragInfo.appended = true;
      document.body.appendChild(el);
    }
  };

  const handleDrag: DraggableEventHandler = (_, ui) => {
    const dragInfo = dragStuffRef.current;
    const { left } = ui.node.getBoundingClientRect();
    if (dragInfo.node !== null) dragInfo.node.style.left = `${left}px`;
  };

  const handleDragStop: DraggableEventHandler = (_, ui) => {
    const { lastX } = ui;

    drag.current.state.x = 0;

    props.setColumn((preColumns) => {
      // const preColumn = preColumns[props.columnIndex];
      const newColumns = preColumns.reduce((pre, cur, i) => {
        if (i > props.columnIndex) {
          pre.push({
            ...cur,
            offset: cur.offset + lastX,
          });
        } else if (i === props.columnIndex) {
          pre.push({
            ...cur,
            width: cur.width + lastX,
          });
        } else {
          pre.push(cur);
        }
        return pre;
      }, []);

      return newColumns;
    });
    const dragInfo = dragStuffRef.current;
    if (dragInfo.node) {
      document.body.removeChild(dragInfo.node);
    }
    dragInfo.appended = false;
    dragInfo.node = null;
    setDrag(false);
  };
  return (
    <Draggable
      ref={drag}
      axis="x"
      onStart={handleDragStart}
      onDrag={bindRaf(handleDrag)}
      onStop={handleDragStop}
    >
      <div ref={dragBasic} {...props} className="drag-stuff" />
    </Draggable>
  );
}

// function DragStuff(props) {
//   const [isDragging, setDragging] = React.useState(false);
//   const dragStuffRef = React.useRef<HTMLDivElement>(null);

//   React.useEffect(() => {
//     if (!isDragging && dragStuffRef.current)
//       dragStuffRef.current.setAttribute(
//         'style',
//         `left: ${props.style.left}px;`,
//       );
//   }, [dragStuffRef.current, isDragging, props.style]);

//   const stuffClassNames = clsx({
//     'drag-stuff': true,
//     'stuff-dragging': isDragging,
//   });

//   const handleDrag = (e, ui) => {
//     const { clientX } = e;
//     const node = dragStuffRef.current;
//     // const { left } = ui.node.getBoundingClientRect();
//     // node.style.left = `${clientX}px`;
//   };

//   const handleDragStart = (e, ui) => {
//     const { clientX } = e;
//     setDragging(true);
//     const wrapper = document.getElementsByClassName('table-wrapper')[0];
//     const height = getInnerHeight(wrapper);
//     const { left, top } = ui.node.getBoundingClientRect();

//     console.log(left, top, height);
//     const node = dragStuffRef.current;
//     node?.setAttribute('style', '');
//     node?.setAttribute(
//       'style',
//       `left: ${clientX}px; height: ${height}px; top: ${top}px;`,
//     );
//   };

//   const handleDragStop = (e, ui) => {
//     // const node = dragStuffRef.current;
//     // node?.setAttribute('style', '');
//     setDragging(false);
//   };
//   return (
//     <Draggable
//       axis="x"
//       onStart={handleDragStart}
//       onDrag={bindRaf(handleDrag)}
//       onStop={handleDragStop}
//     >
//       <div
//         ref={dragStuffRef}
//         // style={!isDragging && props.style}
//         className={stuffClassNames}
//       />
//     </Draggable>
//   );
// }

export default DragStuff;
