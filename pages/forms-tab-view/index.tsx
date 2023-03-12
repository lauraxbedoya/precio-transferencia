import { useRouter } from 'next/router';
import { TabView, TabPanel } from 'primereact/tabview';
import { useRef, useState } from 'react';
import FormTabs from '@/components/common/forms-tabs/form-tabs';
import { Toast } from 'primereact/toast';

export default function FormTabView() {
  const toast = useRef<Toast>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [enabledTabs, setEnableTabs] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const router = useRouter();

  const handleSaveAnswers = (e: any) => {
    if (e === false) {
      alert('Debe seleccionar una respuesta');
    } else if (e === true) {
      setActiveIndex(activeIndex + 1);
      setEnableTabs({
        ...enabledTabs,
        [activeIndex + 1]: true,
      });
    }
    const lastElement = Object.values(enabledTabs).slice(-1)[0];
    if (lastElement === true) {
      toast?.current?.show({
        severity: 'success',
        summary: 'Felicitaciones',
        detail: 'Hemos enviado correctamente su formulario',
      });
      router.push('/');
    }
  };

  const handleTabChange = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Toast ref={toast} />
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => handleTabChange(e.index)}
      >
        <TabPanel header="Header 1" disabled={!enabledTabs[0]}>
          <FormTabs
            onAnswerSubmit={handleSaveAnswers}
            pregunta="pregunta nro 1"
          />
        </TabPanel>
        <TabPanel header="Header 2" disabled={!enabledTabs[1]}>
          <FormTabs
            onAnswerSubmit={handleSaveAnswers}
            pregunta="pregunta nro 2"
          />
        </TabPanel>
        <TabPanel header="Header 3" disabled={!enabledTabs[2]}>
          <FormTabs
            onAnswerSubmit={handleSaveAnswers}
            pregunta="pregunta nro 3"
          />
        </TabPanel>
        <TabPanel header="Header 4" disabled={!enabledTabs[3]}>
          <FormTabs
            onAnswerSubmit={handleSaveAnswers}
            pregunta="pregunta nro 4"
          />
        </TabPanel>
        <TabPanel header="Header 5" disabled={!enabledTabs[4]}>
          <FormTabs
            onAnswerSubmit={handleSaveAnswers}
            pregunta="pregunta nro 5"
          />
        </TabPanel>
      </TabView>
    </>
  );
}
