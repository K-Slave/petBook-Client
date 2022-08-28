import LinkedNavBar from "../Core/LinkedNavBar";

type NavMenuProps = {
  InputWrap: JSX.Element;
  InputButton: JSX.Element;
  InputSearch: JSX.Element;

  to: string[];
  name: string[];
  currentPath: string;
};

const NavMenu = ({
  InputWrap,
  InputButton,
  InputSearch,

  to,
  name,
  currentPath,
}: NavMenuProps) => {
  return (
    <LinkedNavBar>
      <LinkedNavBar.Wrap as={InputWrap}>
        <div style={{ display: "flex", height: "100%" }}>
          {to.map((page, idx) => (
            <LinkedNavBar.Button
              as={InputButton}
              to={page}
              value={name[idx]}
              currentPath={currentPath}
            />
          ))}
        </div>

        <LinkedNavBar.Search as={InputSearch} />
      </LinkedNavBar.Wrap>
    </LinkedNavBar>
  );
};

// display: "inline-block",

export default NavMenu;
