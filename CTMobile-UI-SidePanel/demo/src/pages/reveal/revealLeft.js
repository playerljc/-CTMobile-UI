import CtMobile from 'ctmobile';
import SidePanel from '@ctmobile/ui-sidepanel';
// import '@ctmobile/ui-sidepanel/sidepanel.less';

export default class extends CtMobile.Page {
  constructor(ctmobile, id) {
    super(ctmobile, id);
  }

  /**
   * 页面创建调用
   * @callback
   * @override
   * @param {Object} e
   */
  pageCreate(e) {
    console.log(this.getId(), 'pageCreate');

    this.leftBtnDom = this.getPageDOM().querySelector('.reveal_left');
    this.leftSideDom = this.getPageDOM().querySelector('.ct-sidepanel-reveal-left');

    this.leftBtnDom.addEventListener('click', () => {
      if (this.leftPanel.isCollapse()) {
        this.leftPanel.close();
      } else {
        this.leftPanel.show();
      }
    });

    this.leftPanel = SidePanel(this.leftSideDom, {
      mask: true,
      width: '80%',
      type: 'reveal',
      direction: 'left',
    });
  }

  /** *
   * 页面显示之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeShow(e) {
    console.log(this.getId(), 'pageBeforeShow');
  }

  /** *
   * 页面显示
   * @callback
   * @override
   * @param {Object} e
   */
  pageShow(e) {
    console.log(this.getId(), 'pageShow');
  }

  /** *
   *  页面显示之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterShow(e) {
    console.log(this.getId(), 'pageAfterShow');
  }

  /** *
   * 页面暂停之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforePause(e) {
    console.log(this.getId(), 'pageBeforePause');
  }

  /** *
   * 页面暂停之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterPause(e) {
    console.log(this.getId(), 'pageAfterPause');
  }

  /** *
   * 页面恢复之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeRestore(e) {
    console.log(this.getId(), 'pageBeforeRestore');
  }

  /** *
   * 页面恢复
   * @callback
   * @override
   * @param {Object} e
   */
  pageRestore(e) {
    console.log(this.getId(), 'pageRestore');
  }

  /** *
   * 页面恢复之后
   * @callback
   * @override
   * @param {Object} e
   */
  pageAfterRestore(e) {
    console.log(this.getId(), 'pageAfterRestore');
  }

  /** *
   * 页面DOM销毁之前
   * @callback
   * @override
   * @param {Object} e
   */
  pageBeforeDestroy(e) {
    console.log(this.getId(), 'pageBeforeDestroy');
  }
}
