import ReachedItem from "@/components/molecules/ReachedItem";
import React from "react";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem amount="290M+" desc="Players Top Up" />
          <div className="vertical-line meLg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 meLg-35 ms-lg-35 d-lg-none d-block"></div>

          <ReachedItem amount="12.500" desc="Games Available" />
          <div className="horizontal-line mt-6 mb-6 meLg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line meLg-35 ms-lg-35 d-lg-block d-none"></div>

          <ReachedItem amount="99,9%" desc="Happy Players" />
          <div className="horizontal-line mt-6 mb-6 meLg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line meLg-35 ms-lg-35 d-lg-block d-none"></div>

          <ReachedItem amount="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
