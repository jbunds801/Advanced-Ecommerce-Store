// Type declaration for react-rating-stars-component (minimal)
// Keeps the editor happy; no runtime effect.
// eslint-disable @typescript-eslint/no-explicit-any
/* Example use-cases:
A small JS-only npm package without @types.
A browser global provided by a script tag.
Quick temporary fixes during migration. */

declare module "react-rating-stars-component" {
  import type { ComponentType } from "react";

  export interface ReactStarsProps {
    count: number;
    value: number;
    size: number;
    char: string;
    isHalf: boolean;
    edit?: boolean;
    activeColor?: string;
    color?: string;
    a11y?: boolean;
    onChange?: (value: number) => void;
  }

  const ReactStars: ComponentType<ReactStarsProps>;
  export default ReactStars;
}

// icons (optional) - the library can accept React elements for icons
//npm i react-icons
/* import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'

emptyIcon?: React.ReactNode;
halfIcon?: React.ReactNode;
filledIcon?: React.ReactNode;
classNames?: string;
name?: string;
}
*/