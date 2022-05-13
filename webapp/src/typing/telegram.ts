declare namespace TelegramWebview {
  type Params = {
    text?: string;
    color?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
  };

  type ThemeParams = {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
  };

  type WebAppUser = {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    photo_url: string;
  };

  type WebAppInitData = {
    query_id: string;
    user: WebAppUser;
    receiver: WebAppUser;
    start_param: string;
    auth_date: number;
    hash: string;
  };

  type MainButton = {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
    setParams: (params: Params) => void;
  };

  enum EventType {
    themeChanged = "themeChanged",
    viewportChanged = "viewportChanged",
    mainButtonClicked = "mainButtonClicked",
  }

  type TOnEvent<TEventType, TEventHandler> = (
    eventType: TEventType,
    eventHandler: TEventHandler
  ) => void;

  type OnEvent =
    | TOnEvent<EventType.themeChanged, () => void> // new theme settings and color scheme can be received via this.themeParams and this.colorScheme
    | TOnEvent<
        EventType.viewportChanged,
        (state: { isStateStable: boolean }) => void
      > // The current value of the visible section’s height is available in this.viewportHeight.
    | TOnEvent<EventType.mainButtonClicked, () => void>;

  type OffEvent = OnEvent;

  type Message = unknown; // todo
  // type Message = {
  //   // todo
  //   message_id: number;
  //   from?: User;
  //   sender_chat?: Chat;
  //   date?: number;
  //   chat?: Chat;
  //   forward_from?: User;
  //   forward_from_chat?: User;
  //   forward_from_message_id?: number;
  //   forward_signature?: string;
  //   forward_sender_name?: string;
  //   forward_date?: number;
  //   is_automatic_forward?: boolean;
  //   reply_to_message?: Message;
  //   via_bot?: User;
  //   edit_date?: number;
  //   has_protected_content?: boolean;
  //   media_group_id?: string;
  //   author_signature?: string;
  //   text?: string;
  //   entities?: Array<MessageEntity>
  //   animation?: Animation;
  //   audio?: Audio;
  //   document?: Document;
  //   photo?: Array<PhotoSize>;
  //   sticker?: Sticker;

  // };

  type WebApp = {
    initData: string;
    initDataUnsafe: WebAppInitData;
    colorScheme: string;
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainButton;
    onEvent: OnEvent;
    offEvent: OffEvent;
    sendData?: (data: Message) => void; // only available when activated by keyboard button
    ready: () => void;
    expand: () => void;
    close: () => void;
  };

  type Telegram = {
    WebApp: WebApp;
  };
}

export default TelegramWebview;
