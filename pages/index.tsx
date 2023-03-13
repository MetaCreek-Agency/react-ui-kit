import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { ButtonDemo } from '@/ui-kit/Button/demo';
import { IconsDemo } from '@/ui-kit/Icon/demo';
import { DemoTexts } from '@/ui-kit/Typography/Text/demo';
import { DemoTitles } from '@/ui-kit/Typography/Title/demo';
import { DemoPriceTexts } from '@/ui-kit/Typography/PriceText/demo';
import { DemoInputs } from '@/ui-kit/Input/demo';
import * as Typography from '@/ui-kit/Typography';
import { SegmentPickerDemo } from '@/ui-kit/SegmentedPicker/demo';
import { DemoDividers } from '@/ui-kit/Divider/demo';
import { DemoSearchBars } from '@/components/SearchBar/demo';
import { DemoAmounts } from '@/components/Amount/demo';
import { StepperDemo } from '@/ui-kit/Stepper/demo';
import { DemoSelects } from '@/ui-kit/Select/demo';
import { CheckboxDemo } from '@/ui-kit/Checkbox/demo';
import { SwitcherDemo } from '@/ui-kit/Switcher/demo';
import { DemoInfo } from '@/components/Info/demo';
import { DemoCheckboxRow } from '@/components/CheckBoxRow/demo';
import { DemoInfoRow } from '@/components/InfoRow/demo';
import { DemoSwitcherRow } from '@/components/SwitcherRow/demo';
import { DemoTextRow } from '@/components/TextRow/demo';
import { DemoNavBars } from '@/components/NavBar/demo';
import { DemoDrawers } from '@/ui-kit/Drawer/demo';
import { DemoModals } from '@/ui-kit/Modal/demo';
import { DemoTitleRow } from '@/components/TitleRow/demo';
import { DemoProductCards } from '@/components/ProductCard/demo';
import { DemoTabBars } from '@/ui-kit/TabBar/demo';
import { DemoGrids } from '@/ui-kit/Grid/demo';

const { Title } = Typography;

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>EG ui-kit</title>
      </Head>
      <Title level={2}>Кнопки</Title>
      <ButtonDemo />
      <hr />

      <Title level={2}>Иконки</Title>
      <IconsDemo />
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <Title level={2} align="left">
            Заголовки
          </Title>
          <DemoTitles />
        </div>
        <div style={{ width: '30%' }}>
          <Title level={2} align="left">
            Текст
          </Title>
          <DemoTexts />
        </div>
        <div style={{ width: '30%' }}>
          <Title level={2} align="left">
            Price
          </Title>
          <DemoPriceTexts />
        </div>
      </div>
      <hr />

      <Title level={2}>Segment Picker</Title>
      <SegmentPickerDemo />
      <hr />

      <Title level={2}>Selects</Title>
      <DemoSelects />
      <br />
      <hr />

      <Title level={2}>Input</Title>
      <DemoInputs />
      <br />
      <hr />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%', margin: 15 }}>
          <Title level={2}>Search Bar</Title>
          <DemoSearchBars />
        </div>
        <div style={{ width: '50%', margin: 15 }}>
          <Title level={2}>Dividers</Title>
          <DemoDividers />
        </div>
      </div>
      <br />
      <hr />

      <Title level={2}>Stepper</Title>
      <StepperDemo />
      <br />
      <hr />

      <Title level={2}>Amount</Title>
      <DemoAmounts />
      <br />

      <Title level={2}>Checkbox</Title>
      <CheckboxDemo />
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '45%' }}>
          <Title level={2}>Switcher</Title>
          <SwitcherDemo />
        </div>
        <div style={{ width: '45%' }}>
          <Title level={2}>Info</Title>
          <DemoInfo />
        </div>
      </div>
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '45%' }}>
          <Title level={2}>Checkbox Row</Title>
          <DemoCheckboxRow />
        </div>
        <div style={{ width: '45%' }}>
          <Title level={2}>Info Row</Title>
          <DemoInfoRow />
        </div>
      </div>
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '45%' }}>
          <Title level={2}>Switcher Row</Title>
          <DemoSwitcherRow />
        </div>
        <div style={{ width: '45%' }}>
          <Title level={2}>Text Row</Title>
          <DemoTextRow />
        </div>
      </div>
      <hr />
      <Title level={2}>Title Row</Title>
      <DemoTitleRow />
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '50%' }}>
          <Title level={2}>Drawer</Title>
          <DemoDrawers />
        </div>
        <div style={{ width: '40%' }}>
          <Title level={2}>Modal</Title>
          <DemoModals />
        </div>
      </div>
      <br />
      <br />
      <hr />

      <br />
      <br />
      <DemoNavBars />

      <br />
      <br />
      <Title level={2}>Product Card</Title>
      <DemoProductCards />

      <br />
      <br />

      <Title level={2}>TabBar</Title>
      <DemoTabBars />
      <hr />

      <br />
      <br />

      <Title level={2}>Grids (Row and Col)</Title>
      <DemoGrids />

      <br />
      <br />
    </div>
  );
}
