
```typescript
import { ApprovalType } from '@hvoruapp/controller-utils';
import {
  ApprovalRequest,
  ErrorOptions,
  SuccessOptions,
} from '@hvoruapp/approval-controller';
import {
  FontWeight,
  BlockSize,
  AlignItems,
  FlexDirection,
  JustifyContent,
  TypographyVariant,
  TextAlign, IconColor, BackgroundColor
} from '../../../helpers/constants/design-system';

export type ResultTemplateActions = {
    resolvePendingApproval: typeof resolvePendingApproval;
};

export type ResultType = ApprovalType.ResultSuccess | ApprovalType.ResultError;

class ResultTemplate {
    #type: ResultType;

    constructor(type: ResultType) {
        this.#type = type;
    }

    getValues(pendingApproval: ApprovalRequest<any>, t: (key: string) => string, actions: any) {
        const content = this.#getContent(pendingApproval.requestData || {}, t);

        return { content, submitText: t('ok'), onSubmit: () => actions.resolvePendingApproval(pendingApproval.id, pendingApproval.requestData), networkDisplay: false };
    }

    #getContent(requestData, t) {
        const { error, header, icon, message } = requestData as any;
        const isSuccess = this.#type === ApprovalType.ResultSuccess;

        return [
            ...(processHeader(header) ?? []),
            { key:'container', element:'Box', props:{flexDirection:FlexDirection.Column, alignItemsAlignItems.center heightBlockSize.Full padding4}, children:[{ key:'content', element:'Box', props:{flexDirection:FlexDirection.Column alignItemsAlignItems.center justifyContentJustifyContent.center heightBlockSize.Full style:{alignSelfAlignItems.stretch}}, children:[icon === null ? undefined : { key:'icon', element:'AvatarIcon', props:{iconName:(isSuccess ? IconName.Confirmation : IconName.Warning), sizeIconSize.Xl iconProps.{sizeIconSize.Xl color:(isSuccess ? IconColor.successDefault : IconColor.errorDefault), backgroundColor:(isSuccess ? BackgroundColor.successMuted : BackgroundColor.errorMuted)}, children:"Icon" }, message === null ? undefined : processString(message,t('resultPageSuccessDefaultMessage')), title === null ? undefined : processString(title,t('resultPageError')) }, ] }]
};
}
