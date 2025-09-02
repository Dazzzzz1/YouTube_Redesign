import './MenuMedia.scss'

function MenuMedia() {
    return ( <>
        <nav className="menuMedia_box">
            <button className="menuMedia_btn">
                <svg class="menuMedia_btn_img" id="side_nav_btn_img_home" width="20" height="19" viewBox="0 0 20 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill="curentColor" fill-rule="evenodd" d="M1.552 10.592a.912.912 0 0 1-1.286 0 .902.902 0 0 1 0-1.28L9.357.266a.912.912 0 0 1 1.286 0l9.09 9.048a.902.902 0 0 1 0 1.28.912.912 0 0 1-1.285 0l-.266-.266v6.868A1.81 1.81 0 0 1 16.362 19H3.638a1.812 1.812 0 0 1-1.819-1.805v-6.868l-.266.265Zm2.085 6.598 2.727.001V11.76c0-.499.406-.903.906-.903h5.46c.5 0 .906.404.906.903v5.433l2.728.002V8.519L10 2.192 3.636 8.519l.001 8.671Zm8.181-4.525v4.527H8.182v-4.525l3.636-.002Z" clip-rule="evenodd"/>
                </svg>  
                <div class="menuMedia_btn_text" id="home">Home</div>   
            </button>
            <button className="menuMedia_btn">
                <svg class="menuMedia_btn_img" xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M13.615 7.2C15.132 8.51 16 10.117 16 12.321c0 4.59-3.587 8.206-7.989 8.206C3.606 20.527 0 16.909 0 12.32c0-2.527.548-4.089 2.155-6.684.509-.822 1.744-.523 1.84.445.085.87.35 1.61.734 2.177C4.472 5.193 5.804 1.744 9.086.106c.76-.38 1.608.319 1.41 1.16-.512 2.183.016 3.356 1.396 4.621.034.031.206.158.433.326.412.304 1.006.742 1.29.987ZM2.621 9.007C2.339 9.663 2 10.453 2 12.321c0 3.447 2.701 6.157 6.011 6.157 3.305 0 5.989-2.705 5.989-6.157 0-1.54-.575-2.605-1.674-3.554-.174-.15-.58-.452-.963-.737-.362-.27-.702-.522-.804-.616C9.234 6.2 8.424 4.907 8.314 3.184c-.67.668-2.21 2.748-1.342 6.864.134.639-.34 1.241-.977 1.241-1.265 0-2.515-.99-3.279-2.507-.03.074-.062.149-.095.225Z" clip-rule="evenodd" />
                </svg>
                <div class="menuMedia_btn_text">Trending</div>
            </button>
            <button className="menuMedia_btn">
                <svg class="menuMedia_btn_img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M3.906 1A1 1 0 0 1 4.9 0h8.01a1 1 0 0 1 0 2H4.9a.995.995 0 0 1-.995-1ZM.01 8.095l.801 8.01A2.123 2.123 0 0 0 2.901 18H14.91A2.129 2.129 0 0 0 17 16.104l.801-8.01A1.885 1.885 0 0 0 15.905 6H1.906C.76 6-.104 6.956.01 8.095Zm2.001-.09 13.789.003L14.906 16h-12L2.01 8.004ZM2.901 3a1 1 0 0 0 0 2H14.91a1 1 0 0 0 0-2H2.901Z" clip-rule="evenodd"/>
                </svg>
                <div class="menuMedia_btn_text">Subscriptions</div>
            </button>
            <button className="menuMedia_btn">
                <svg class="menuMedia_btn_img" xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="none">
                    <path fill="currentColor" fill-rule="evenodd" d="M1.814 0C.818 0 0 .794 0 1.773v12.454C0 15.207.814 16 1.819 16h16.362C19.185 16 20 15.204 20 14.223V4.444c0-.983-.816-1.777-1.822-1.777h-8.175L8.716.743C8.44.333 7.81 0 7.308 0H1.814ZM18.18 14.222l-16.363.005-.004-12.45 5.459.005 1.21 1.858a1.83 1.83 0 0 0 1.52.804h8.179l-.001 9.778Z" clip-rule="evenodd"/>
                </svg>  
                <div class="menuMedia_btn_text">Library</div>       
            </button>
        </nav>
    </> );
}

export default MenuMedia;