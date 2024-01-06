
export function MenuOptionsModal({ pos, options, relative }) {
    let style = { top: '30px' }

    if (pos === 'top') style = { bottom: '30px' }

    if (relative) {
        const { left, right, top, bottom } = relative
        style = left ? { ...style, left: left } : { ...style, right: right }
        style = top ? { ...style, top: top } : { ...style, bottom: bottom }
    }

    return (
        <div style={style} className="menu-option-modal">
            {options.map((option, idx) => {
                return <div key={idx} className="btn" onClick={option.onOptionClick}>
                    <img src={option.icon} />
                    <p>{option.title}</p>
                </div>
            })}
        </div>
    )
}

// options = [
//     {
//         icon: '.../../...',
//         title: 'Delete',
//         onOptionClick: func()
//     }
// ]