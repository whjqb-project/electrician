import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  IndexView,
  About as AboutView,
  NotFound as NotFoundView,

  //Residential
  FaultFinding as FaultFindingView,
  PowerpointInstallation as PowerpointInstallationView,
  EVChargerInstallation as EVChargerInstallationView,
  WiringAndRewiring as WiringAndRewiringView,
  SwitchRCDInstallation as SwitchRCDInstallationView,
  SmokeAlarmsInstallation as SmokeAlarmsInstallationView,
  CeilingFanInstallation as CeilingFanInstallationView,
  SwitchboardUpgrade as SwitchboardUpgradeView,
  ExhaustFanInstallation as ExhaustFanInstallationView,
  TVWallMounting as TVWallMountingView,
  OutdoorLighting as OutdoorLightingView,
  GardenLighting as GardenLightingView,
  LEDDownlight as LEDDownlightView,

  // Commercial
  EmergencyLighting as EmergencyLightingView,
  CommercialElectricalFitouts as CommercialElectricalFitoutsView,
  WarehouseLighting as WarehouseLightingView,
  ElectricalLayoutPlanning as ElectricalLayoutPlanningView,
  DataNetworkCabling as DataNetworkCablingView,
  CCTV as CCTVView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <IndexView />} />
      {/* residential */}
      <Route
        exact
        path="/led-downlight"
        render={() => <LEDDownlightView />}
      />
      <Route
        exact
        path="/outdoor-lighting"
        render={() => <OutdoorLightingView />}
      />
      <Route
        exact
        path="/garden-lighting"
        render={() => <GardenLightingView />}
      />
      <Route
        exact
        path="/fault-finding"
        render={() => <FaultFindingView />}
      />
      <Route
        exact
        path="/powerpoint-installation"
        render={() => <PowerpointInstallationView />}
      />
      <Route
        exact
        path="/ev-charger-installation"
        render={() => <EVChargerInstallationView />}
      />
      <Route
        exact
        path="/wiring-and-rewiring"
        render={() => <WiringAndRewiringView />}
      />
      <Route
        exact
        path="/switch-rcd-installation"
        render={() => <SwitchRCDInstallationView />}
      />
      <Route
        exact
        path="/smoke-alarms-installation"
        render={() => <SmokeAlarmsInstallationView />}
      />
      <Route
        exact
        path="/ceiling-fan-installation"
        render={() => <CeilingFanInstallationView />}
      />
      <Route
        exact
        path="/switchboard-upgrade"
        render={() => <SwitchboardUpgradeView />}
      />
      <Route
        exact
        path="/exhaust-fan-installation"
        render={() => <ExhaustFanInstallationView />}
      />
      <Route
        exact
        path="/tv-wall-mounting"
        render={() => <TVWallMountingView />}
      />
      {/* commercial */}
      <Route
        exact
        path="/commercial-electrical-fitouts"
        render={() => <CommercialElectricalFitoutsView />}
      />
      <Route
        exact
        path="/emergency-lighting"
        render={() => <EmergencyLightingView />}
      />
      <Route
        exact
        path="/electrical-layout-planning"
        render={() => <ElectricalLayoutPlanningView />}
      />
      <Route
        exact
        path="/warehouse-lighting"
        render={() => <WarehouseLightingView />}
      />
      <Route
        exact
        path="/data-network-cabling"
        render={() => <DataNetworkCablingView />}
      />
      <Route
        exact
        path="/cctv"
        render={() => <CCTVView />}
      />
      {/* abount */}
      <Route exact path="/about" render={() => <AboutView />} />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      {/* <Route
        exact
        path="/not-found-cover"
        render={() => <NotFoundCoverView />}
      /> */}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
