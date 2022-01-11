interface ChildProp {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProp) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>click me!</button>
        </div>
    );
};

export const ChildAsFC: React.FC<ChildProp> = ({color, onClick}) => {
    return (
        <div>
            hello nagpur
            <div>
                {color}
                <button onClick={onClick}>click me!</button>
            </div>
        </div>
    );
};

export const ChildAsFC1: React.FunctionComponent<ChildProp> = ({color}) => {
    return <div>hello nagpur</div>;
};

//both are correct FunctionCompenent can also be written as FC
