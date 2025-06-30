import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";
describe("ProductImageGallery", () => {
  test("should return null for emty imageurls", () => {
    const imgs: string[] = [];
    const { container } = render(<ProductImageGallery imageUrls={imgs} />);
    expect(container).toBeEmptyDOMElement();
  });
  test("should render img url", () => {
    const imgs = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imgs} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    imgs.forEach((url, index) => {
      expect(images[index]).toHaveAttribute('src', url);
    });
  });
});
