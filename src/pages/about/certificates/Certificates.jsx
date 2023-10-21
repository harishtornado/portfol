import React, { useEffect, useState } from "react";
import "./certificates.css";
import { data } from "../../../data";

const certificates = data.certificates;

const Certificates = () => {
  const [item, setItem] = useState([...certificates[0].certificates]);
  const [option, setOption] = useState(certificates[0].name);

  useEffect(() => {
    const info = certificates.map((cert) => {
      if (cert.name === option) {
        setItem(cert.certificates);
      }
    });
  }, [option]);

  return (
    <div className="Certificates container">
      <div className="left_section">
        <div className="certificates">
          {item?.map((certificate, index) => (
            <div key={index}>
              <div className="certificate_img">
                <img src={certificate.imgurl} alt="certificate" />
              </div>
              <div className="certificate_name">{certificate.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="right_section">
        <div className="header">Select</div>
        <div className="categories">
          <ul className="category_list">
            {certificates.map((certificate, index) => (
              <li
                className={`category ${option === certificate.name ? "active" : null
                  }`}
                key={index}
                onClick={() => setOption(certificate.name)}
              >
                {certificate.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
