import "./Map.scss";

interface IClass {
	classNames?: string;
}

const Map = ({ classNames}: IClass) => {

	return (
		<div className={classNames}>
			<div className="container">
            </div>
        </div>
    )
}

export default Map;