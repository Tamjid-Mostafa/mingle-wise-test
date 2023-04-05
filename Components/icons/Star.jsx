const Star = ({ ...props }) => {
    return (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="url(#paint0_linear_1628_19894)" />
            <defs>
                <linearGradient id="paint0_linear_1628_19894" x1="2.55347" y1="-1.28807" x2="10.0709" y2="22.132" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C19C00" />
                    <stop offset="0.421123" stop-color="#FFCE00" />
                    <stop offset="0.963542" stop-color="#B8970B" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default Star;