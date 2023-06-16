import { BehaviorSubject } from "rxjs";

export type ChatFrom = "user" | "bot";

export default class Chat {
  private _from: ChatFrom;
  private _messages$ = new BehaviorSubject<string[]>([]);
  private _mainMessage?: string;

  constructor({ from, message }: { from: ChatFrom; message?: string }) {
    this._from = from;
    if (message) {
      this._messages$.next([message]);
      this._mainMessage = message;
    }
  }

  public get from() {
    return this._from;
  }

  public get messages$() {
    return this._messages$;
  }

  public get mainMessage() {
    return this._mainMessage;
  }

  public set mainMessage(mainMessage: string | undefined) {
    this._mainMessage = mainMessage;
  }
}
