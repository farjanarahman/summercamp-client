import { useLoaderData } from 'react-router-dom';

const Class = () => {
    const single = useLoaderData();
   console.log(single)
    return (
        <div>
            This is single class.
        </div>
    );
};

export default Class;