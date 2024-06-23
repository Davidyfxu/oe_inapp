import React, { lazy, Suspense } from "react";
import { Spin } from "antd";

const LazyRouter = (lazyComponent: any) => {
  const Comp = lazy(lazyComponent);
  return (props: any) => (
    <Suspense fallback={<Spin />}>
      <Comp {...props} />
    </Suspense>
  );
};

export default LazyRouter;
