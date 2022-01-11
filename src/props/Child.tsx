interface ChildProp {
    color: string;
}

export const Child = ({color}: ChildProp) => {
    return (
        <div>
            {color}
            <button>click me!</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProp> = ({color}) => {
    return <div>hello nagpur</div>;
};

export const ChildAsFC1: React.FunctionComponent<ChildProp> = ({color}) => {
    return <div>hello nagpur</div>;
};

//both are correct FunctionCompenent can also be written as FC
