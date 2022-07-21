import { useState } from "react";
import Image from "next/image";
import css from "./index.module.scss";
import ExcludeInput from "../components/excludeInput";
import Input from "../components/input";
import InputPanel from "../components/inputPanel";

export default function App() {
  const [distance, setDistance] = useState(13);
  const [tripsBack, setTripsBack] = useState(4);
  const [excludeValue, setExcludeValue] = useState(0);

  const usedFuelOneTrip = Math.round(distance * 2.25)
  const usedFuel = usedFuelOneTrip * tripsBack;
  let usedSteel = 50 + tripsBack * 60;
  let usedComponents = 1 + tripsBack;

  if (excludeValue === 1) {
    usedSteel = 0;
  } else if (excludeValue === 2) {
    usedComponents = 0;
  }

  const usedSilver = Math.round(
    usedFuel * 2.3 + usedSteel * 1.9 + usedComponents * 32
  );

  return (
    <div className={css.root}>
      <div className={css.githubRibbon}>
        <a
          href="https://www.github.com/zerobyter/rimworld-pod-calculator"
          target="_blank"
          rel="noreferrer"
        >
          <div>GitHub Repo</div>
        </a>
      </div>
      <div className={css.container}>
        <div>
          <div className={css.title}>Welcome to RimWorld Pod Calculator!</div>
          <div>
            Tool for calculating the materials needed for back-and-fourth pod
            travel!
          </div>
        </div>
        <div className={css.mainDataPanel}>
          <div className={css.inputsPanel}>
            <InputPanel>
              <Input
                label="Distance (in tiles)"
                defaultValue={13}
                min={1}
                max={150}
                onChange={setDistance}
              />
            </InputPanel>

            <InputPanel>
              <Input
                label="Trips back"
                defaultValue={4}
                min={1}
                max={100}
                onChange={setTripsBack}
              />
            </InputPanel>

            <InputPanel>
              <ExcludeInput onChange={setExcludeValue} />
            </InputPanel>
          </div>
          <div className={css.resultsPanel}>
            <div className={css.takeThis}>
              This is what you{"'"}ll need to take with you on your way there...
            </div>
            <div title={`${distance} * 2.25 * ${tripsBack} = ${usedFuel} chemfuel`}>
              Fuel: {usedFuel} ({usedFuelOneTrip}){" "}
              <span className={css.offsetIcon}><Image src="/chemfuel.webp" alt={`${usedFuel} Chemfuel`} width={21} height={21} /></span>
            </div>
            <div title={`50 + 60 * ${tripsBack} = ${usedSteel} steel`}>
              Steel: {usedSteel}{" "}
              <span className={css.offsetIcon}><Image src="/steel.webp" alt={`${usedSteel} Steel`} width={21} height={21} className={css.offsetIcon} /></span>
            </div>
            <div title={`1 + ${tripsBack} = ${usedComponents} components`}>
              Components: {usedComponents}
              <span className={css.offsetIcon}><Image src="/component.webp" alt={`${usedComponents} Component`} width={21} height={21} className={css.offsetIcon} /></span>
            </div>
            <div
              title={`${usedFuel} * 2.3 + ${usedSteel} * 1.9 + ${usedComponents} * 32 = ${usedSilver} silver`}
            >
              Total money spent: {usedSilver} silver{" "}
              <span className={css.offsetIcon}><Image src="/silver.webp" alt={`${usedSilver} Silver`} width={21} height={21} className={css.offsetIcon} /></span>
            </div>
            <div className={css.spacer}></div>
            <div className={css.credits}>By ZeroByter! With {"<3"}</div>
          </div>
        </div >
      </div >
    </div >
  );
}
