import { RiArrowRightSFill } from 'react-icons/ri'
const GridList = ({ list }) => {
    return (
        <div
            className="grid  grid-cols-2 mt-8 text-left"
            style={{ direction: 'ltr' }}
        >
            {list.map((item, index) => (
                <p key={index} className="font-nav">
                    <span className="inline-block text-primary">
                        <RiArrowRightSFill />
                    </span>
                    {item}
                </p>
            ))}
        </div>
    )
}

export default GridList
