import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  // IndexView,
  Home as HomeView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  AccountBilling as AccountBillingView,
  AccountGeneral as AccountGeneralView,
  AccountNotifications as AccountNotificationsView,
  AccountSecurity as AccountSecurityView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
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
  CommercialElectricalFitouts as CommercialElectricalFitoutsView,
  TVWallMounting as TVWallMountingView,
  TVAntennasOutlets as TVAntennasOutletsView,
  PreventativeElectricalMaintenance as PreventativeElectricalMaintenanceView,
  CommercialDataNetworkCabling as CommercialDataNetworkCablingView,
  CommercialSwitchboardPannels as CommercialSwitchboardPannelsView,
  SurgeProtection as SurgeProtectionView,
  FireAlarmSystems as FireAlarmSystemsView,
  ThreePhasePowerInstallation as ThreePhasePowerInstallationView,
} from './views';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStartReactScripts as QuickStartReactScriptsView,
  QuickStartNextJS as QuickStartNextJSView,
  QuickStartGatsbyJS as QuickStartGatsbyJSView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  PageComponent as PageComponentView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
} from './views/docs';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <FaultFindingView />} />
      <Route exact path="/home" render={() => <HomeView />} />
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
        path="/commercial-electrical-fitouts"
        render={() => <CommercialElectricalFitoutsView />}
      />
      <Route
        exact
        path="/tv-wall-mounting"
        render={() => <TVWallMountingView />}
      />
      <Route
        exact
        path="/tv-antennas-outlets"
        render={() => <TVAntennasOutletsView />}
      />
      <Route
        exact
        path="/preventative-electrical-maintenance"
        render={() => <PreventativeElectricalMaintenanceView />}
      />
      <Route
        exact
        path="/commercial-data-network-cabling"
        render={() => <CommercialDataNetworkCablingView />}
      />
      <Route
        exact
        path="/commercial-switchboard-panels"
        render={() => <CommercialSwitchboardPannelsView />}
      />
      <Route
        exact
        path="/surge-protection"
        render={() => <SurgeProtectionView />}
      />
      <Route
        exact
        path="/fire-alarm-systems"
        render={() => <FireAlarmSystemsView />}
      />
      <Route
        exact
        path="/three-phase-power-installation"
        render={() => <ThreePhasePowerInstallationView />}
      />
      <Route
        exact
        path="/customers"
        render={() => <CustomersView />}
      />
      <Route
        exact
        path="/hire-us"
        render={() => <HireUsView />}
      />
      <Route
        exact
        path="/faq"
        render={() => <FaqView />}
      />
      <Route
        exact
        path="/career-listing"
        render={() => <CareerListingView />}
      />
      <Route
        exact
        path="/career-listing-minimal"
        render={() => <CareerListingMinimalView />}
      />
      <Route
        exact
        path="/career-opening"
        render={() => <CareerOpeningView />}
      />
      <Route exact path="/contact-page" render={() => <ContactPageView />} />
      <Route exact path="/coworking" render={() => <CoworkingView />} />
      <Route exact path="/e-learning" render={() => <ElearningView />} />
      <Route exact path="/enterprise" render={() => <EnterpriseView />} />
      <Route exact path="/service" render={() => <ServiceView />} />
      <Route exact path="/web-basic" render={() => <WebBasicView />} />
      <Route exact path="/desktop-app" render={() => <DesktopAppView />} />
      <Route exact path="/expo" render={() => <ExpoView />} />
      <Route exact path="/agency" render={() => <AgencyView />} />
      <Route exact path="/startup" render={() => <StartupView />} />
      <Route
        exact
        path="/design-company"
        render={() => <DesignCompanyView />}
      />
      <Route exact path="/mobile-app" render={() => <MobileAppView />} />
      <Route exact path="/job-listing" render={() => <JobListingView />} />
      <Route exact path="/rental" render={() => <RentalView />} />
      <Route exact path="/cloud-hosting" render={() => <CloudHostingView />} />
      <Route exact path="/logistics" render={() => <LogisticsView />} />
      <Route exact path="/e-commerce" render={() => <EcommerceView />} />
      <Route exact path="/pricing" render={() => <PricingView />} />
      <Route exact path="/about" render={() => <AboutView />} />
      <Route exact path="/help-center" render={() => <HelpCenterView />} />
      <Route
        exact
        path="/help-center-article"
        render={() => <HelpCenterArticleView />}
      />
      <Route
        exact
        path="/portfolio-page"
        render={() => <PortfolioPageView />}
      />
      <Route
        exact
        path="/portfolio-masonry"
        render={() => <PortfolioMasonryView />}
      />
      <Route
        exact
        path="/portfolio-grid"
        render={() => <PortfolioGridView />}
      />
      <Route exact path="/company-terms" render={() => <CompanyTermsView />} />
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
      <Route exact path="/blog-search" render={() => <BlogSearchView />} />
      <Route exact path="/blog-newsroom" render={() => <BlogNewsroomView />} />
      <Route exact path="/blog-article" render={() => <BlogArticleView />} />
      <Route
        exact
        path="/blog-reach-view"
        render={() => <BlogReachViewView />}
      />
      <Route
        exact
        path="/password-reset-cover"
        render={() => <PasswordResetCoverView />}
      />
      <Route
        exact
        path="/password-reset-simple"
        render={() => <PasswordResetSimpleView />}
      />
      <Route exact path="/signin-simple" render={() => <SigninSimpleView />} />
      <Route exact path="/signin-cover" render={() => <SigninCoverView />} />
      <Route exact path="/signup-simple" render={() => <SignupSimpleView />} />
      <Route exact path="/signup-cover" render={() => <SignupCoverView />} />
      <Route
        exact
        path="/account-billing"
        render={() => <AccountBillingView />}
      />
      <Route
        exact
        path="/account-general"
        render={() => <AccountGeneralView />}
      />
      <Route
        exact
        path="/account-notifications"
        render={() => <AccountNotificationsView />}
      />
      <Route
        exact
        path="/account-security"
        render={() => <AccountSecurityView />}
      />
      <Route exact path="/not-found" render={() => <NotFoundView />} />
      <Route
        exact
        path="/not-found-cover"
        render={() => <NotFoundCoverView />}
      />
      <Route exact path="/docs" render={() => <IntroductionView />} />
      <Route
        exact
        path="/docs/introduction"
        render={() => <IntroductionView />}
      />
      <Route
        exact
        path="/docs/quick-start-react-scripts"
        render={() => <QuickStartReactScriptsView />}
      />
      <Route
        exact
        path="/docs/quick-start-nextjs"
        render={() => <QuickStartNextJSView />}
      />
      <Route
        exact
        path="/docs/quick-start-gatsbyjs"
        render={() => <QuickStartGatsbyJSView />}
      />
      <Route exact path="/docs/colors" render={() => <ColorsView />} />
      <Route
        exact
        path="/docs/typography"
        render={() => <TypographyComponentView />}
      />
      <Route exact path="/docs/shadows" render={() => <ShadowsView />} />
      <Route exact path="/docs/page" render={() => <PageComponentView />} />
      <Route
        exact
        path="/docs/container"
        render={() => <ContainerComponentView />}
      />
      <Route exact path="/docs/layouts" render={() => <LayoutsView />} />
      <Route exact path="/docs/icons" render={() => <IconsView />} />
      <Route
        exact
        path="/docs/illustrations"
        render={() => <IllustrationsView />}
      />
      <Route exact path="/docs/support" render={() => <SupportView />} />
      <Route exact path="/docs/change-log" render={() => <ChangeLogView />} />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
