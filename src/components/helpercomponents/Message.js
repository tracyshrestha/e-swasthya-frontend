const Message = ({message,error}) => {
    return (
        <div class= {`${error ? 'bg-[#f24667]' : 'bg-[#42ADF0]'} flex items-center  rounded w-auto p-4 mb-6 text-gray-500  shadow dark:text-gray-400 dark:bg-gray-800 `}   role="alert">
            <div class="ml-3 items-center text-white sm:text-base text-xs">{message}</div>
        </div>
    )
}

export default Message;