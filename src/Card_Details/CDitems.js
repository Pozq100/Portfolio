// Card Description items


const CDitems = ({items}) => {
    return (
        <div className="itemsContainer">
            {
                items.map((item, index) => (
                    <div className="itemsFormat" key={index}>
                        {item}
                    </div>
                ))    
            }
        </div>
    )     
}


export default CDitems;