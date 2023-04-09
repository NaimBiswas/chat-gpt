function ChatTitle ({Title}) {
    return(
        <div className="mb-2">
            <span title={Title} className="textLeft chatTitle"><i className="fas fa-comments "></i> 
                {Title && Title?.length > 15? Title.substring(0,15) + '...': Title}
            </span>
        </div>
    )
}

export default ChatTitle