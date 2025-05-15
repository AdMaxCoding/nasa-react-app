export default function SideBar(props)
{
const{handleToggleModal, data} = props
    return (
        <div className="sideBar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sideBarContent">
                <h2>{data?.title}</h2>
                <div className="sideBarInfoCont">
                <p>
                    {data?.date}
                </p>
                <p>
                    {data?.explanation}
                </p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
      
    )
}