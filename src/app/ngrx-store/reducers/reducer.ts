import { initalUserState, UserInfoState } from '../state/user.state';
import { _SaveComment, _SavePost, _SaveUser, _SaveVerify, UserAction } from '../acionts/actions';


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
                }
            break;
            case _SavePost.AddPost:
                return{
                    ...state,
                    post: [ ...state.post, action.payload ]
                } 
            break;
            case _SaveComment.AddComment:
                return{
                    ...state,
                    comment: [ ...state.comment, action.payload ]
                }
                default:
                    return state;
      }
    }