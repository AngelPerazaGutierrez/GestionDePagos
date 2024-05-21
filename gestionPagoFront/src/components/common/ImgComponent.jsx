import "../../assets/css/common/ImageComponent.css";

export const ImageComponent = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};
