import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const intialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  intialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  })
);
