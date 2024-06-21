import { PageTitle, useDocumentTitle } from '../utils/pageTitle';
import { PageWrapper } from '../components/PageWrapper';
import { PageHeader } from '../components/PageHeader';
import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from '../constants/appConstants';
import { MdOutlineAdd } from 'react-icons/md';
import { LargeBtn } from '../components/LargeBtn';
import { SalesTableHead } from '../components/sales/SalesTableHead';
import { SalesTableRow } from '../components/sales/SalesTableRow';

export const SalesPage = () => {
    useDocumentTitle(PageTitle.Sales);
  return (
    <PageWrapper heading={"Welcome to your Profile"} subHeading={"profiles"}>
        <PageHeader
          header="Profiles"
          loading={false}
          btn={true}
          text="Create Profile"
          modalHeader="Add Profile"
          size="4xl"
          childComp={
            window.innerWidth >= TAB_BREAKPOINT ? (
              <MdOutlineAdd size={BUTTON_ICON_SIZE} />
            ) : undefined
          }
          modalChildren={
            <LargeBtn text="Add Order" bg={""} color={""} loading={false} />
          }
        ></PageHeader>
        <SalesTableHead />
        <SalesTableRow />
        
      </PageWrapper>
  )
}
