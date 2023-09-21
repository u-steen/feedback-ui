function Header({text, bgColor, textColor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={headerStyle}>
           <h2>{text}</h2>
        </header>
    )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#FF6A95"

}

export default Header;