import { CustomButton } from "../CustomButton";

export const Navegacion = ({ pages, onSelectPage }) => {
  return (
    <nav className="container">
      {pages.map((page) => (
        <div className="mb-4 container " key={page.id}>
          <CustomButton
            text={page.name}
            icon={page.icon}
            onClick={() => onSelectPage(page)}
          />
        </div>
      ))}
    </nav>
  );
};
