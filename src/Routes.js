import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  // IndexView,
  Home as HomeView,
  ContactPage as ContactPageView,
  Startup as StartupView,
  About as AboutView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,

  //Residential
  FaultFinding as FaultFindingView,
  PowerpointInstallation as PowerpointInstallationView,
  EVChargerInstallation as EVChargerInstallationView,
  WiringAndRewiring as WiringAndRewiringView,
  SwitchRCDInstallation as SwitchRCDInstallationView,
  SmokeAlarmsInstallation as SmokeAlarmsInstallationView,
  CeilingFanInstallation as CeilingFanInstallationView,
  SwitchboardUpgrade as SwitchboardUpgradeView,
  DataNetworkCabling as DataNetworkCablingView,
  ExhaustFanInstallation as ExhaustFanInstallationView,
  TVWallMounting as TVWallMountingView,
  CommercialDataNetworkCabling as CommercialDataNetworkCablingView,
  OutdoorLighting as OutdoorLightingView,
  GardenLighting as GardenLightingView,
  LEDDownlight as LEDDownlightView,
  HomeCCTV as HomeCCTVView,

  // Commercial
  EmergencyLighting as EmergencyLightingView,
  CommercialElectricalFitouts as CommercialElectricalFitoutsView,
  WarehouseLighting as WarehouseLightingView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <FaultFindingView />} />
      <Route exact path="/home" render={() => <HomeView />} />
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
        path="/data-network-cabling"
        render={() => <DataNetworkCablingView />}
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
      <Route
        exact
        path="/home-cctv"
        render={() => <HomeCCTVView />}
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
        path="/commercial-data-network-cabling"
        render={() => <CommercialDataNetworkCablingView />}
      />
      <Route
        exact
        path="/warehouse-lighting"
        render={() => <WarehouseLightingView />}
      />
      <Route exact path="/contact-page" render={() => <ContactPageView />} />
      <Route exact path="/startup" render={() => <StartupView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Route
        exact
        path="/contact-sidebar-map"
        render={() => <ContactPageSidebarMapView />}
      />
      <Route
        exact
        path="/contact-page-cover"
        render={() => <ContactPageCoverView />}
      />
      <Route
        exact
        path="/about-side-cover"
        render={() => <AboutSideCoverView />}
      />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      <Route
        exact
        path="/not-found-cover"
        render={() => <NotFoundCoverView />}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
