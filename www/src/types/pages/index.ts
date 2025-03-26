import { P } from 'utilscript';
import { BrandedActiveText } from '../fixtures';

export type BrandedAnimatedCodeDescriptionDescription = P.Branded<
  string,
  'BrandedAnimatedCodeDescriptionDescription'
>;

export interface AnimatedCodeDescriptionType {
  title: BrandedActiveText;
  description: BrandedAnimatedCodeDescriptionDescription;
}
