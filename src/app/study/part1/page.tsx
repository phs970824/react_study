"use client";
import { useImperativeHandle, useRef } from "react";

type ChildHandle = {
    focus: () => void;
};

// 자식 컴포넌트
function ChildComponent({ ref }: { ref: React.RefObject<ChildHandle | null> }) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current?.focus();
            },
        };
    });

    return <input ref={inputRef} />;
}

ChildComponent.displayName = "ChildComponent";

// 부모 컴포넌트
function ParentComponent() {
    const inputRef = useRef<ChildHandle>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <ChildComponent ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

// -------------------------------------------------------------------
// function ChildComponent({ ref }: { ref: React.RefObject<HTMLInputElement | null> }) {

//     useImperativeHandle(ref, () => {
//         return {
//             focus: () => {
//                 ref.current?.focus();
//             }
//         }
//     })

//     return (
//         <div>
//             <input ref={ref} />
//         </div>
//     );
// }

// // 부모 컴포넌트
// function ParentComponent() {
//     const inputRef = useRef<HTMLInputElement>(null);

//     const focusInput = () => {
//         inputRef.current?.focus();
//     };

//     return (
//         <div>
//             <ChildComponent ref={inputRef} />
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     );
// }

//-----------------------------------------------------------------------------
// const Component = () => {
//     const inputRef = useRef<HTMLInputElement>(null);

//     const focusInput = () => {
//         inputRef.current?.focus();
//     };

//     return (
//         <div>
//             <Component2 ref={inputRef} />
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     );
// };

// const Component2 = forwardRef<HTMLInputElement>((props, ref) => {
//     return <input ref={ref} className="box" />;
// });

// Component2.displayName = 'Search';

export default ParentComponent;
