import { Child } from './Child';

const Parent = () => {
    return <Child color='red' onClick={() => console.log('check check')} />;
};

export default Parent;
