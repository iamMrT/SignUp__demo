import './Content.css'

function Content(){
    return (
        <div className="content">
            <div className="content__box">
                <h1>ĐĂNG KÝ</h1>
                <input type="text" placeHolder="Tên"></input>
                <input type="text" placeHolder="Mật khẩu"></input>
                <p className="content__node">Ít nhất có 8 ký tự ( gồm có số, ký tự viết hoa và ký tự đặc biệt</p>

                <input type="text" placeHolder="Số điện thoại"></input>
                <input type="text" placeHolder="Email"></input>

                <div className="content__warning">
                    <p className="textPrivate">Chính sách bảo mật</p>
                    <p className="textAgree">
                        <input type="radio"></input>
                        Chấp thuận
                    </p>
                </div>

                <button className="btnLogin">Đăng ký</button>
                <div className="contentBox__col2">
                   <p className="textCol2__what">Bạn đã có tài khoản?</p>
                   <p className="textCol2__login">Đăng nhập</p>
                </div>

                <div className="box__btn">
                    <a className="content__box--fb" href=""></a>
                    Đăng nhập với Facebook
                </div>
                <div className="box__btn">
                    <a className="content__box--gg" href=""></a>
                    Đăng nhập với GooGle
                </div>
            </div>
        </div>
    )
}

export default Content