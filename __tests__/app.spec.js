import {mount} from '@vue/test-utils';
import App from '../src/components/CustomerList.vue';

describe('customer_list', () => {
    let wrapper;

    const IDMAPS = {
        APP_INPUT: 'app-input',
        SUBMIT_BUTTON: 'submit-button',
        CUSTOMER_LIST: 'customer-list',
        LIST_ITEMS: ['list-item0', 'list-item1', 'list-item2', 'list-item3']
    }

    const addValue = async (value) => {
        await getByTestId(IDMAPS.APP_INPUT).setValue(value);
        return getByTestId(IDMAPS.SUBMIT_BUTTON).trigger('click');
    }

    const getByTestId = (id, parent) => {
        if (!parent) {
            parent = wrapper;
        }
        return parent.find(`[data-testid="${id}"]`)
    }


    beforeEach(() => {
        wrapper = mount(App)
    })

    it('should render initial UI as expected', () => {
        expect(getByTestId(IDMAPS.APP_INPUT).value).toBeFalsy();
        expect(getByTestId(IDMAPS.SUBMIT_BUTTON).element.innerHTML.trim()).toEqual("Add Customer")
        expect(getByTestId(IDMAPS.CUSTOMER_LIST).exists()).toBeFalsy();
        expect(getByTestId(IDMAPS.LIST_ITEMS[0]).exists()).toBeFalsy();
    });

    it('should add a customer when submit button is clicked', async () => {
        await addValue('Steve');
        expect(getByTestId(IDMAPS.LIST_ITEMS[0]).element.innerHTML.trim()).toEqual('Steve')
    })

    it('should add multiple customers', async () => {
        await addValue('Steve');
        await addValue('Bob');
        await addValue('John');
        expect(getByTestId(IDMAPS.CUSTOMER_LIST)).toBeTruthy();
        expect(getByTestId(IDMAPS.LIST_ITEMS[0]).element.innerHTML.trim()).toEqual('Steve')
        expect(getByTestId(IDMAPS.LIST_ITEMS[1]).element.innerHTML.trim()).toEqual('Bob')
        expect(getByTestId(IDMAPS.LIST_ITEMS[2]).element.innerHTML.trim()).toEqual('John')
    })

    it('should clear input after a customer is added', async () => {
        await addValue('Steve');
        expect(getByTestId(IDMAPS.CUSTOMER_LIST)).toBeTruthy();
        expect(getByTestId(IDMAPS.LIST_ITEMS[0]).element.innerHTML.trim()).toEqual('Steve');
        expect(getByTestId(IDMAPS.APP_INPUT).value).toBeFalsy();
    })

    it('should not add a customer when the input is empty', async () => {
        await addValue('');
        expect(getByTestId(IDMAPS.CUSTOMER_LIST).exists()).toBeFalsy();
        expect(getByTestId(IDMAPS.LIST_ITEMS[0]).exists()).toBeFalsy();
    })
});
