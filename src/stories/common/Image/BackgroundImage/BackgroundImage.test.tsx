import React from "react";
import BackgroundImage from "./BackgroundImage";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

const originUrl =
  process.env.NODE_ENV === "production"
    ? "https://petbook.site"
    : "http://localhost:3000";

const TestComponent = () => {
  return (
    <BackgroundImage
      url={`${originUrl}/icons/icons8-backjo-96.png`}
      width="3.125rem"
      height="3.125rem"
      bgPosition="center"
      tag="span"
    />
  );
};

describe("BackgroundImage", () => {
  it("should render without errors", () => {
    const { container } = render(<TestComponent />);

    expect(container).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const tree = renderer.create(<TestComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders the correct content", () => {
    render(<TestComponent />);

    // 정상적으로 렌더링되었는지 확인
    const spanElement = document.querySelector("span");

    expect(spanElement).toBeInTheDocument();

    // Check the width attribute of the span element
    expect(spanElement).toHaveStyle({ width: "3.125rem" });
  });

  test('renders a div tag when tag prop is "div"', () => {
    render(
      <BackgroundImage
        url={`${originUrl}/Landing__Background.png`}
        width="100px"
        height="100px"
        tag="div"
      />
    );
    expect(document.querySelector("div")).toBeInTheDocument();
  });

  test('renders an a tag when tag prop is "a"', () => {
    render(
      <BackgroundImage
        url={`${originUrl}/icons/icons8-gosum-96.png`}
        width="100px"
        height="100px"
        tag="a"
        anchorAttr={{
          href: "https://icons8.com/icon/aKEeT9FEK2cQ/%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98",
        }}
      />
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://icons8.com/icon/aKEeT9FEK2cQ/%EA%B3%A0%EC%8A%B4%EB%8F%84%EC%B9%98"
    );
  });
});
