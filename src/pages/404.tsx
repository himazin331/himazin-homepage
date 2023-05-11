/* カスタム404エラーページ */

const Custom404 = () => {
  return (
    <div style={{fontFamily: "system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'", textAlign: "center", marginTop: "40vh"}}>
      <div>
        <h1 className="next-error-h1" 
          style={{display: "inline-block", margin: "0 20px 0 0", paddingRight: "23px", fontSize: "24px", fontWeight: "500", verticalAlign: "top", lineHeight:"49px", borderRight: "1px solid rgba(255,255,255,.3)"}}>
          404
        </h1>
        <div style={{display: "inline-block", textAlign: "left"}}>
          <h2 style={{fontSize: "14px", fontWeight: "400", lineHeight: "49px", margin: "0"}}>
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Custom404;