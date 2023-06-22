import { initalUserState, UserInfoState } from '../state/user.state';
import { _SaveUser, _SaveVerify, UserAction } from '../acionts/actions';


export const userReducer = (
    state = initalUserState,
    action: UserAction): UserInfoState => {
      switch ( action.type ) {
        case _SaveUser.AddUser:
            return {
                ...state,
                user: [ action.payload]
            }
            break;
            case _SaveVerify.AddVerify:
                return{
                    ...state,
                    verify: [ action.payload ]
                };
                default:
                    return state;
      }
    }