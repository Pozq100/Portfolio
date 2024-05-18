const CDteam = ({items}) => {
    
    function directToLinkedIn(name) {
        if (name === "Jayden") {
            window.open("https://www.linkedin.com/in/jaydentanxy/","_blank").focus();
        } else if (name === "Zi Yang") {
            window.open("https://www.linkedin.com/in/wong-zi-yang-4a1100258/","_blank").focus();
        }
    }
    
    return (
        <div>
            {!items?.length ? (
                <></>
            ) : (
                <div className="itemsContainer">
                   Team Members: {
                    items.map((item, index) => (
                        <div className="itemsFormat member" key={index} onClick = {() => directToLinkedIn(item)}>
                            {item}
                        </div>
                    ))    
                    } 
                </div>
            )
            }
        </div>
    )
}

export default CDteam;