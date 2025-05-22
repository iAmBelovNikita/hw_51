import './Person.css';
import type {FC, PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
    name: string;
    age: number;
}

const Person:FC<Props> = (props) => {

    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;
