import Phone from "../../assets/new-phone.png";
import Playstore from "../../assets/new-google-copy.png";
import Appstore from "../../assets/new-apple.png";

export const Download = () => {
  return (
    <>
      <div className="download-container">
        <div className="download-content">
          <img
            src={Phone}
            alt="a phone showing the advert of the burger king"
            width={"100%"}
            // style={{
            //   maxWidth: "488",
            //   minHeight: "458",
            //   maxHeight: "500",
            //   objectFit: "cover",
            // }}
          />
        </div>

        <div className="download-content-2">
          <div className="download-content-2a">
            <h2>
              Download our app and discover the incredible offers we have for
              you!
            </h2>
          </div>

          <div className="download-content-3">
            <img
              src={Playstore}
              alt="PlayStore"
              width={"30%"}
              style={{ marginRight: "2rem" }}
            />
            <img src={Appstore} alt="AppStore" width={"30%"} />
          </div>

          <p>
            Apple and the Apple logo are trademarks of Apple Inc., registered in
            the US and other countries. App Store is a service mark of Apple
            Inc. Google Play is a trademark of Google Inc. Terms and Conditions
            apply.
          </p>
        </div>
      </div>
    </>
  );
};
