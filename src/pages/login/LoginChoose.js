import React, { useState, useEffect } from "react";
import Logo from "../../images/my-ubaya.png";
import Mahasiswa from "../../images/mahasiswa-cover.jpg";
import Dosen from "../../images/dosen-cover.jpg";
import "./Login.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";

const LoginChoose = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Steam card hover effect by Jarvis Mercer
    const maxTilt = 15;

    $(".login-card")
      .mousemove(function (evt) {
        let bounding = mouseOverBoundingElem(evt);

        let posX = bounding.width / 2 - bounding.x;
        let posY = bounding.height / 2 - bounding.y;
        let hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
        let hypotenuseMax = Math.sqrt(
          Math.pow(bounding.width / 2, 2) + Math.pow(bounding.height / 2, 2)
        );
        let ratio = hypotenuseCursor / hypotenuseMax;

        $(".login-card__cover", this).css({
          transform: `rotate3d(${posY / hypotenuseCursor}, ${
            -posX / hypotenuseCursor
          }, 0, ${ratio * maxTilt}deg)`,
        });
        $(".gloss", this).css({
          transform: `translateX(${posX * ratio * 0.75}px) translateY(${
            posY * ratio
          }px)`, // 0.75 = offset
        });
      })
      .mouseleave(function () {
        let css = {
          transform: "",
          filter: "",
        };
        $(".login-card__cover, .gloss", this).css(css);
      });

    function mouseOverBoundingElem(evt) {
      let bounding = evt.target.getBoundingClientRect();
      let x = evt.originalEvent.pageX - Math.round(bounding.left);
      let y = evt.originalEvent.pageY - Math.round(bounding.top);

      return {
        x: Math.max(0, x),
        y: Math.max(0, y),
        width: Math.round(bounding.width),
        height: Math.round(bounding.height),
      };
    }
  }, []);

  return (
    <div className="container login-choose">
      <div className="container d-flex flex-column justify-content-center align-items-center ">
        <img className="img-fluid" src={Logo} />
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <div class="login-card m-auto" onClick={() => setShow(true)}>
            <div
              class="login-card__cover"
              style={{
                backgroundImage: `url(${Mahasiswa})`,
              }}
            >
              <div class="gloss"></div>

              <h3 className="text-center">Mahasiswa</h3>
              <p>Klik untuk membuka halaman login mahasiswa</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-6">
          <div className="login-card m-auto">
            <div
              class="login-card__cover"
              style={{
                backgroundImage: `url(${Dosen})`,
              }}
            >
              <h3 className="text-center">Dosen</h3>
              <p>Klik untuk membuka halaman login Dosen</p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        centered
        size="md"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="login-modal">
            <div className="content-header text-center">
              <h3>Login Mahasiswa</h3>
              <p>Form login untuk mahasiswa UBAYA</p>
            </div>
            <form>
              <div class="form-group">
                <label for="inputNRP">sNRP</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNRP"
                  aria-describedby="nrpHelp"
                  placeholder="s160719001"
                />
                <small id="nrpHelp" class="form-text text-muted">
                  Contoh: s160719001
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <button className="btn btn-primary mt-3">Login</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="link-help text-center">
            <Link>Forgot password?</Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginChoose;
