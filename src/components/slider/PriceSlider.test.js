import { render, screen } from '@testing-library/react';
import PriceSlider from './PriceSlider';

test('Test if price slider loads', () => {
  const utils = render(<PriceSlider maxValue={10}/>);
  const sliderParent = utils.getByLabelText('slider-test-label');
  expect(sliderParent).toBeInTheDocument();
});

test('Test if price slider loads', () => {
  const utils = render(<PriceSlider maxValue={10}/>);
  const sliderParent = utils.getByLabelText('slider-test-label');
  expect(sliderParent).toBeInTheDocument();
});

test('Test if price slider loads when max value is different from default', () => {
  const utils = render(<PriceSlider maxValue={17}/>);
  const sliderParent = utils.getAllByLabelText("scale-17");
  expect(sliderParent).toBeTruthy();
});