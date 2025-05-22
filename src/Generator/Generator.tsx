import './Generator.css';
import type {FC, PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
    valueNumber: number;
}

const Generator:FC<Props> = (props) => {

    return (
        <div className="loteryBall">
            <h1>{props.valueNumber}</h1>
        </div>
    )

};

export default Generator;
