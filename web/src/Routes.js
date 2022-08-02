// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Set, Router, Route } from '@redwoodjs/router'

import TaaksLayout from 'src/layouts/TaaksLayout'

import KlantsLayout from 'src/layouts/KlantsLayout'
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeaderLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="login">
          <Set wrap={TaaksLayout}>
            <Route path="/taaks/new" page={TaakNewTaakPage} name="newTaak" />
            <Route path="/taaks/{id:Int}/edit" page={TaakEditTaakPage} name="editTaak" />
            <Route path="/taaks/{id:Int}" page={TaakTaakPage} name="taak" />
            <Route path="/taken" page={TaakTaaksPage} name="taken" />
          </Set>
          <Set wrap={KlantsLayout}>
            <Route path="/klants/new" page={KlantNewKlantPage} name="newKlant" />
            <Route path="/klants/{id:Int}/edit" page={KlantEditKlantPage} name="editKlant" />
            <Route path="/klants/{id:Int}" page={KlantKlantPage} name="klant" />
            <Route path="/klanten" page={KlantKlantsPage} name="klanten" />
          </Set>
            <Route path="/" page={HomePage} name="home" />
        </Private>
            <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
