<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Group;


?>

<div class="student-form">


    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'f_name')->textInput() ?>

    <?= $form->field($model, 's_name')->textInput() ?>

    <?= $form->field($model, 't_name')->textInput() ?>

    <?= $form->field($model, 'id_group')->dropDownList(ArrayHelper::map(Group::find()->all(), 'id', 'number')) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>


</div>
