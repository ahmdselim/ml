import React from "react";
import { Link } from "react-router-dom";
import ml from "../images/ml.jpg";

const AboutUS = () => {
  return (
    <div className="project" style={{ direction: "rtl" }}>
      <div className="banner">
        <h3>ماذا عنا </h3>
        <p style={{ direction: "ltr" }}>
          <Link to="/">الرئيسية</Link>
        </p>
      </div>
      <div className="content">
        <div className="pic">
          <img src={ml} alt="ml" />
        </div>
        <div className="info">
          <p style={{ lineHeight: 2 }}>
            تطور التكنولوجيا في السنوات الأخيرة جعلها ضرورية في حياتنا اليومية.
            ومع ذلك ، لا توجد مصادر كافية متاحة لمساعدة المتحدثين باللغة العربية
            في فهم المفاهيم التكنولوجية الأساسية. لذلك حرصنا على ان تكون مدونتنا
            مصدر مساعد في فهم أحد المفاهيم التكنولوجية الاساسية وهو Machine
            Learning
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
